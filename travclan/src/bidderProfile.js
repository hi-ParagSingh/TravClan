import React, { useEffect, useState } from 'react'

const BidderProfile = ({match}) => {
   

    useEffect(() => {
        fetchItems();
    }, []);

    const [data, setData] = useState([]);
    
    const fetchItems = async () => {
        const fetchItem = await fetch(`https://intense-tor-76305.herokuapp.com/merchants/${match.params.id}`);
        const data = await fetchItem.json();
        console.log(data);
        setData(data);
        
    }
    
    return (
        <div className="userProfile">
            <div>
                <img src={data.avatarUrl} alt="" className="userProfileImage"/>
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
                    <div>{data.id}</div>
                    <div>{data.firstname}</div>
                    <div>{data.lastname}</div>
                    <div>{data.email}</div>
                    <div>{data.phone}</div>
                    {/* <div>{data.hasPremium.toString().toUpperCase()}</div> */}
                    {/* <div>{data.bids.map(element => {
                       return element.amount + ", ";  
                    })}</div> */}
                </div>
            </div>

        </div>
    )
}

export default BidderProfile
