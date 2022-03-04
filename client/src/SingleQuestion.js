import React from 'react'

function SingleQuestion({optionText,questionText,questionType,qindex,required,select_option}) {
    return (
        <div>
              <div key={qindex} style={{marginBottom:"5px"}}>
                                  <div style={{display: 'flex'}}>
                                  <div className="form-check">
                                    <label>
                                      <input
                                        
                                        type={questionType}
                                        
                                       
                                        className="form-check-input"
                                        required={required}
                                        style={{margnLeft:"5px",marginRight:"5px"}}
                                        onChange={(e)=>{select_option(questionText,optionText)}}
                                      />
                                  {optionText}
                                    </label>
                                  </div>
                                  </div>
                              </div>
            
        </div>
    )
}

export default SingleQuestion
