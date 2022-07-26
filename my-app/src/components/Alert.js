import React from 'react'

export default function Alert(props) {
    return (
            props.alertMsg && <div className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alertMsg.type}</strong> {props.alertMsg.msg}
            </div>
    )
}
