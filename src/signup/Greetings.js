import React from 'react';

class Greetings extends React.Component{
    render(){
        return(
            <div id={"padding1"} >
                <div  className='jumbotron bg-dark text-light'>
                    <h1 className={"display-4"}>A Brief Note</h1>
                    <hr/>
                    <h1 className={'lead'}><em>A crawler is a program that visits Web sites and reads their pages and other information in order to create entries for a search engine index. The major search engines on the Web all have such a program, which is also known as a "spider" or a "bot." Crawlers are typically programmed to visit sites that have been submitted by their owners as new or updated. Entire sites or specific pages can be selectively visited and indexed. Crawlers apparently gained the name because they crawl through a site a page at a time, following the links to other pages on the site until all pages have been read.</em></h1>
                </div>
            </div>
        );
    }
}
export default Greetings;