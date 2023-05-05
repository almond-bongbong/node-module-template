import styles from './index.module.scss';
import { sum } from './utils/sum';

function Component() {
  return <div className={styles.compo}>hello{sum(1, 2)}</div>;
}

export default Component;
