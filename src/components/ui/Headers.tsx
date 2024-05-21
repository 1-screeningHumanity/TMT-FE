export default function Headers() {
  return (
    <div className="ml-3 mt-3 relative flex">
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/material-rounded/50/back--v1.png"
        alt="back--v1"
      />
      <div className="absolute right-0 top-0 flex">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/material-outlined/50/checked--v1.png"
          alt="checked--v1"
          className="mr-3"
        />
        {/* <img
          width="50"
          height="50"
          src="https://img.icons8.com/material-rounded/50/checked--v1.png"
          alt="checked--v1"
        /> */}
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/puffy/50/alarm.png"
          alt="alarm"
          className="mr-3"
        />
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/small/50/user.png"
          alt="user"
        />
      </div>
    </div>
  )
}
