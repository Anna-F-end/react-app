import avatarImg from "../assets/img/oldman.jpg";
export const Profile = ()=> {
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={avatarImg} alt="avatar-image" width = "100%"/>
            </div>
            <div className="col-md-8">
                <h2>Василий Катков<span></span></h2>
                <p>Id: <span>______</span></p>
                <p>Email: <span>__________</span></p>
            </div>    

        </div>
    );
};