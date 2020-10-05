import React, { PureComponent } from 'react';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';
import styles from '../../styles/activity-header.module';


class ActivityHeader extends PureComponent {
  render() {
    const { activityName } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.back}>
          <Link to="/">
            <MaterialIcon icon="home" color="#333333" size="medium" />
          </Link>
        </div>
        <h1 className={styles.title}>{activityName}</h1>
        <div className={styles.spacer}></div>
      </div>
    );
  }
}

export default ActivityHeader;
