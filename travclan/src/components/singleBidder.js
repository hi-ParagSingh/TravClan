import React from 'react'

const singleBidder = (props) => {
    return (

        <div className="singleBidder">
            <div className="userId">{props.values.userId}</div>
            <div className="firstName">{props.values.firstName}</div>
            <div className="lastName">{props.values.lastName}</div>
            <div className="email">{props.values.email}</div>
            <div className="phone">{props.values.phone}</div>
            <div className="hasPremium">{props.values.hasPremium}</div>
            <div className="bids">{props.toogleState ? Math.max(...props.values.bids) : Math.min(...props.values.bids)}</div>
        </div>

    )
}

export default singleBidder
