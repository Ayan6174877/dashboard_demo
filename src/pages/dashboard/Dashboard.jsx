import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Photos } from '../../components/thumbnails/Photos';
import { Users } from '../../components/users/Users';
import './dashboard.css';


export const Dashboard = () => {
  const {users} = useSelector((state) => state.users)
  const userStatus = useSelector(state => state.users.status)
  const {photos} = useSelector((state) => state.photos)
  const photoStatus = useSelector(state => state.photos.status)

  const [dataType, setDataType] = useState('');

  let loadcomponent = () => {
    switch(dataType){
        case 'user':
          return <Users userdata={users} status={userStatus} />
        case 'photos':
          return <Photos photodata={photos} status={photoStatus} />
        default:
          return <div>Content pane</div>
    }
  }

  let setType = (value)  => {
    setDataType(value)
  }

  useEffect(() => {
    return () => {}
  }, [dataType])
  

  return (
    <div className='dashboard__layout'>
      <div className="dashboard__sidebar">
       <nav>
          <Sidebar typedata={setType} />
        </nav>
      </div>
        <div className='dashboard__content__pane'>
        <main>
          {loadcomponent()}
          {/* {
            userStatus === 'loading' ? <div className='loader'></div> :
            users.length > 0 && <Users userdata={users} /> 
          }

          <Photos photodata={photos} /> */}
         </main>
        </div>
    </div>
   
  )
}
