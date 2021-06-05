import React, { useEffect, useState } from 'react'

const BidderProfile = ({match}) => {
   

    useEffect(() => {
        fetchItems();
    }, []);

    const [item, setItem] = useState([]);
    
    const fetchItems = async () => {
        const fetchItem = await fetch(`https://intense-tor-76305.herokuapp.com/merchants/${match.params.id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
        
    }
    
    return (
        <div className="userProfile">
            <div>
                <img src={item.avatarUrl} alt="" className="userProfileImage"/>
            </div>
            <div className="userGrid">
                <div className="">
                    <div>User ID: </div>
                    <div>First Name: </div>
                    <div>Last Name: </div>
                    <div>Email: </div>
                    <div>Phone: </div>
                    <div>Premium Member: </div>
                    <div>All Bids</div>
                </div>
                <div className="">
                    <div>{item.id}</div>
                    <div>{item.firstname}</div>
                    <div>{item.lastname}</div>
                    <div>{item.email}</div>
                    <div>{item.phone}</div>
                    {/* <div>{item.hasPremium.toString().toUpperCase()}</div>
                    <div>{item.bids.map(element => {
                       return element.amount + ", ";  
                    })}</div> */}
                </div>
            </div>

        </div>
    )
}

export default BidderProfile
