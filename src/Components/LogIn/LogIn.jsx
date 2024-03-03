import { signUpImg } from "../../Assets/Images/Images";
import styles from "./LogIn.module.scss";
import LogInForm from "./LogInForm";

const LogIn = () => {
  return (
    <main className={styles.LogInPage}>
      <div className={styles.container}>
        <div className={styles.imgHolder}>
          <img src={signUpImg} alt="Shopping cart and phone" />
        </div>

        <LogInForm />
      </div>
    </main>
  );
};
export default LogIn;
