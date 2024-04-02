import React from 'react'
import PropTypes from "prop-types"
import style from "./Form.module.css";

const FaceText = ({textHeader, textPara})=>{

    return(
        <>
        <div className={`${style["text-container"]}`}>
            <div className={`${style["header-container"]}`}>
                <h1 className={`${style["header"]}`}>
                    {textHeader}
                </h1>
                <h1 className={`${style["para-content"]}`}>
                    {textPara}
                </h1>
            </div>
        </div>
        </>
    )
}

FaceText.propTypes = {
    textHeader:PropTypes.string.isRequired,
    textPara:PropTypes.string.isRequired
}

export default FaceText