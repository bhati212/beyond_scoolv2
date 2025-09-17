import React, { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import type { ParticipantAnalysis } from '../../../types/reporting';

const ParticipantAnalysisTable: React.FC<{ data: ParticipantAnalysis }> = ({ data }) => {
  const columns = useMemo<MRT_ColumnDef<ParticipantAnalysis>>(() =>{});

  return <MaterialReactTable columns={columns} data={data} />;
};

export default ParticipantAnalysisTable;