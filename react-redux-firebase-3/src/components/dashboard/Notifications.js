import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const {notifications} = props;
    return(
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title"><i class="far fa-bell"></i> Notifications</span>
                  <ul className="notifications">
                      { notifications && notifications.map(item => { return (
                      <li key={item.id} className="card">
                        <div className="card-content">
                        <div className="pink-text"><i class="far fa-bell"></i> {moment(item.time.toDate()).fromNow()}</div>
                        <strong>{item.user}</strong>
                        <p className="grey-text">{item.content}</p>
                        </div>
                      </li>
                      ) })}
                  </ul>
              </div>
          </div>
    )
}

export default Notifications
