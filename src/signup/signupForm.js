import React from 'react';
import validator from 'validator';
import Loading from '../loader/loader';


class SignupForm extends React.Component {

    state = {
        data: {
            email:"",
            password:""
        },
        redirect:false,
        errors:{}
    };

    onChange = e =>
        this.setState({
            data:{...this.state.data, [e.target.name] : e.target.value}
        });

    // componentDidMount(){
    //     this.setState({isLoading:true});
    //     fetch('/api/auth/E05', {
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //
    //     })
    //         .then((response) => response.json())
    //         .then((data)=>this.setState({data:data,isLoading:false}));
    // }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({isLoading:true});
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.setState({errors});
            const headers = new Headers();
            headers.append("Content-Type",'application/json');

            const option = {
                method : 'POST',
                headers,
                body: JSON.stringify(this.state.data)
            };

            const request = new Request('/api/auth',option);
            const response = fetch(request);
            console.log(response.statusText);

            if (response.statusText === 'OK'){
                this.setState({isLoading:false});
                console.log('submitted successfully');
            }

        }

    };

    validate = (data) => {
        const errors = {};

        if(!data.password && !data.email){
            errors.email = "It can't be blank";
            errors.password = "It can't be blank";
        }
        else if(!validator.isEmail(data.email)) {
            errors.email = "Invalid Email";
        }
        return errors;
    };

    render(){
        const { data,errors,isLoading } = this.state;
        if(isLoading){
            return(
                <Loading />
            );
        }
        return(
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"
                           onChange={this.onChange}
                           value ={data.email}
                           autoFocus />
                    {errors.email && <small className="help-block text-danger">{errors.email}</small>}
                </div>

                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control"  placeholder="Password" name="password"
                            value ={data.password}
                           onChange={this.onChange}
                           autoFocus />
                    {errors.password && <small className="help-block text-danger">{errors.password}</small>}

                </div>

                <button className="btn btn-primary">Login</button>

            </form>
        );
    }
}

export default SignupForm;