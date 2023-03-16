
export default {
  render(h) {//h是createElement（标签(Str,Fn,Obj)，数据(methods,directives,event,props,slot...)，子节点）
    let columns = [
      {
        colSpan: 'colSpan',
        rowSpan: 'rowSpan',
        id: 'id',
        filteredValue: 'filteredValue',
        label: 'label',
        sortable: 'sortable',
      }
    ]
    return (
      <table
        class="el-table__header"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <thead>
          <tr>
            {
              columns.map((column, cellIndex) => {
                return (<th>{column.label}
                </th>)
              })
              //   <th>1</th>
              // <th>2</th>
              // <th>3</th>
            }
          </tr>
        </thead>
      </table>
    )
  }
}
