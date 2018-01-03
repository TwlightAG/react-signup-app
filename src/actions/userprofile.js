const UserProfile = (function () {
    let full_name = "";

    let getName = function () {
        return full_name;
    };

    let setName = function (name) {
        full_name = name;
    };

    return {
        getName: getName,
        setName: setName
    }

})();

export default UserProfile;