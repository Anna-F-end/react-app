import avatarImg from "../assets/img/oldman.jpg";
import styles from './Profile.module.css';
export const Profile = ()=> {
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={avatarImg} alt="avatar-image" width = "100%"/>
            </div>
            <div className="col-md-8">
                <h2 className={styles.name}>Василий Катков<span></span></h2>
                <p className={styles.id}>Id: <span>______</span></p>
                <p className={styles.mail}>Email: <span>__________</span></p>
            </div>    

        </div>
    );
};