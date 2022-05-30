import "../styles/Input.css";

const TableRow = ({ value, description, category, date }) => {
  return (
    <tr className="Input-table-row">
      <td className="Input-table-value">{value}</td>
      <td className="Input-table-value">{description}</td>
      <td className="Input-table-value">{category}</td>
      <td className="Input-table-value">{date}</td>
      <button>Edit</button>
      <button>Delete</button>
    </tr>
  );
};

const Input = () => {
  // TODO: make API to get incomes/expenses from a json file (database later down the road)
  // TODO 2: Add edit and delete functionality
  // TODO 3: Build add entry functionality
  // TODO 4: Make formatting suitable
  const incomes = [
    {
      value: "$400",
      description: "Check",
      category: "Income",
      date: "5/5/2022",
    },
    {
      value: "$330",
      description: "Dividends",
      category: "Savings",
      date: "5/15/2022",
    },
    {
      value: "$100",
      description: "Cash Tips",
      category: "Income",
      date: "5/20/2022",
    },
  ];
  const incomeRows = incomes.map((income) => (
    <TableRow
      value={income.value}
      description={income.description}
      category={income.category}
      date={income.date}
    />
  ));

  const expenses = [
    {
      value: "$40",
      description: "Walmart",
      category: "Groceries",
      date: "5/2/2022",
    },
    {
      value: "$30",
      description: "Target",
      category: "Shopping",
      date: "5/7/2022",
    },
    {
      value: "$5",
      description: "Sonic",
      category: "Eating Out",
      date: "5/13/2022",
    },
  ];
  const expenseRows = expenses.map((expense) => (
    <TableRow
      value={expense.value}
      description={expense.description}
      category={expense.category}
      date={expense.date}
    />
  ));

  return (
    <div className="Input-main">
      <table className="Expense-table">
        <thead>
          <tr>
            <th colSpan="4" className="Expense-table-title">EXPENSES</th>
          </tr>
          <tr>
            <th className="Expense-table-header">Value</th>
            <th className="Expense-table-header">Description</th>
            <th className="Expense-table-header">Category</th>
            <th className="Expense-table-header">Date</th>
          </tr>
        </thead>
        <tbody>{expenseRows}</tbody>
      </table>

      <button className="Add-entry-button">Add Entry</button>

      <table className="Income-table">
        <thead>

        <tr>
            <th colSpan="4" className="Income-table-title">INCOMES</th>
          </tr>
          <tr>
            <th className="Income-table-header">Value</th>
            <th className="Income-table-header">Description</th>
            <th className="Income-table-header">Category</th>
            <th className="Income-table-header">Date</th>
          </tr>
        </thead>
        <tbody>{incomeRows}</tbody>
      </table>
    </div>
  );
};

export default Input;
