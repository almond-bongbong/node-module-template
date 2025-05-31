import styles from './index.module.scss';
import { sum } from './utils/sum';

export interface Props {
  className?: string;
}

export function Component({ className }: Props) {
  return <div className={`${styles.compo} ${className}`}>hello{sum(1, 2)}</div>;
}
