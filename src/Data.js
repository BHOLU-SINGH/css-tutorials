const Data = (props) => {
    return(
        <div className="form-control">
          <input type={props.type} placeholder={props.placeholder} required />
        </div>
    );
  }

  export default Data;