import React from 'react'

import {Card, CardImg, CardTitle} from "reactstrap"
import { Link } from "react-router-dom"

function RenderStaff({staff}) {
    return (
        <Card>
            <Link to={`/staff/${staff.id}`}>
                <CardImg src={staff.image} width="100%"/>
                <CardTitle className="text-center">{staff.name}</CardTitle>
            </Link>
        </Card>
    )
}

function StaffList(props) {
    const staffList = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6 g-4">
                <RenderStaff staff={staff} />
            </div>
        )
    })

    return (
        <div className="container-fluid">
            <div className="row p-3">
                <h3>NHÂN VIÊN</h3>
                <hr />
            </div>

            <div className="row">
                { staffList }
            </div>
        </div>
    )
}

export default StaffList
