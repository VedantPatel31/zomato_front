import { Pagination } from '@mui/material'
import React from 'react'

export const Admin = () => {
    return (
        <div>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid>
                    rows={rows}
                    getRowId={(row) => row.id}
                    columns={columns}
                    initialState={{
                        Pagination: { paginationModel: { pageSize: 10 } }
                    }}
                    pageSizeOptions={[10, 20, 30]}
                </DataGrid>
            </div>
        </div>
    )
}
