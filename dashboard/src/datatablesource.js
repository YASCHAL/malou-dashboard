export const userColumns = [
    {field: '_id', headerName: 'ID', width: 200 },
    {
        field:"user", headerName:"user", width:200, renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img src={params.row.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHyE0mlTEn-IhQiQ02MX0MuzFzgY7kzekkitCOmZk3r-cFKw&s"}   alt="avatar" className="cellImg" />
                    {params.row.username}
                </div>
            )
        }
    },
    {field:"email", headerName:"Email",width:200},
    {field:"country", headerName:"Country",width:100},
    {field:"city", headerName:"City",width:100},
    {field:"phone", headerName:"Phone",width:120},
   
]

export const hotelColumns = [
    {field: '_id', headerName: 'ID', width: 250 },
   
    {field:"name", headerName:"Name",width:200},
    {field:"type", headerName:"Type",width:100},
    {field:"title", headerName:"Title",width:230},
    {field:"city", headerName:"City",width:120},
    
   
]
export const roomColumns = [
    {field: '_id', headerName: 'ID', width: 250 },
   
    {field:"title", headerName:"Title",width:100},
    {field:"desc", headerName:"Description",width:300},
    {field:"price", headerName:"Price",width:100},
    {field:"maxPeople", headerName:"Max People",width:100},
    
   
]

