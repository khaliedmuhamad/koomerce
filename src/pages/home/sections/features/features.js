import React,{useState} from 'react';
import featuresData from '../../../../api/featuresData';
export default function Features() {
    const [state] = useState(featuresData)
    return (

        <div className='features my-5'>
            <div className='container'>
                <div className='row text-center'>
                {state.map((feature,index) =><div className='col-4'>
                        <div className='feat-svg'  key={index}>{feature.imgage}</div>
                        <div className='feat-name h4 my-3 text-dark' key={index}>{feature.name}</div>
                        <div className='feat-text' key={index}>{feature.text}</div>
                        </div>
                      
                )}
                  </div>

            </div>
        </div>
    )
}
