import React from 'react';

const Data = (props : any) => {
    console.log(props);
    
    return (
        <div>
           {props.khohieuqua}
           <button onClick={props.khong}>clicked</button>
        </div>
    );
};

export default Data;