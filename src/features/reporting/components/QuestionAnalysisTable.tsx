import React, { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import type { QuestionAnalysis } from '../../../types/reporting';

const QuestionAnalysisTable: React.FC<{ data: QuestionAnalysis[] }> = ({ data }) => {
  const columns = useMemo<MRT_ColumnDef<QuestionAnalysis>[]>(() =>{});

  return <MaterialReactTable columns={columns} data={data} />;
};

export default QuestionAnalysisTable;