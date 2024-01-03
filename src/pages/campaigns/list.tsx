import React from "react";
import {
  useDataGrid,
  EditButton,
  ShowButton,
  DeleteButton,
  List,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IResourceComponentsProps } from "@refinedev/core";

const CampaignList: React.FC<IResourceComponentsProps> = () => {
  const { dataGridProps } = useDataGrid({ resource: "categories" });
  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "id",
        headerName: "id",
        type: "number",
        minWidth: 50,
      },
      {
        field: "title",
        flex: 1,
        headerName: "title",
        minWidth: 200,
      },
      {
        field: "actions",
        headerName: "actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    []
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};

export default CampaignList;
