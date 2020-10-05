import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/activity-card.module';


class ActivityCard extends PureComponent {
  render() {
    const { path, name, image } = this.props;

    return (
      <Link to={path}>
        <div className={styles.activity_card}>
          <div className={styles.image}>
            <img src={image} alt={name} />
          </div>
          <div className={styles.name}>{name}</div>
        </div>
      </Link>
    );
  }
}

export default ActivityCard;
