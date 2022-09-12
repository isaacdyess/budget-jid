import "../styles/Input.css";

const IncomeRow = ({ value, description, account, date }) => {
  return (
    <tr className="Input-table-row">
      <td className="Input-table-value">{value}</td>
      <td className="Input-table-value">{description}</td>
      <td className="Input-table-value">{account}</td>
      <td className="Input-table-value">{date}</td>
      <button>Edit</button>
      <button>Delete</button>
    </tr>
  );
};

const ExpenseRow = ({ value, description, category, account, date }) => {
  return (
    <tr className="Input-table-row">
      <td className="Input-table-value">{value}</td>
      <td className="Input-table-value">{description}</td>
      <td className="Input-table-value">{category}</td>
      <td className="Input-table-value">{account}</td>
      <td className="Input-table-value">{date}</td>
      <button>Edit</button>
      <button>Delete</button>
    </tr>
  );
};

const Input = () => {
  const incomes = [
    {
      value: "$400",
      description: "Check",
      account: "Regions",
      date: "5/5/2022",
    },
    {
      value: "$330",
      description: "Dividends",
      account: "Regions",
      date: "5/15/2022",
    },
    {
      value: "$100",
      description: "Cash Tips",
      account: "Fidelity",
      date: "5/20/2022",
    },
  ];
  const incomeRows = incomes.map((income) => (
    <IncomeRow
      value={income.value}
      description={income.description}
      account={income.account}
      date={income.date}
    />
  ));

  const expenses = [
    {
      value: "$40",
      description: "Walmart",
      category: "Groceries",
      account: "Regions",
      date: "5/2/2022",
    },
    {
      value: "$30",
      description: "Target",
      category: "Shopping",
      account: "CashApp",
      date: "5/7/2022",
    },
    {
      value: "$5",
      description: "Sonic",
      category: "Eating Out",
      account: "Regions",
      date: "5/13/2022",
    },
  ];
  const expenseRows = expenses.map((expense) => (
    <ExpenseRow
      value={expense.value}
      description={expense.description}
      category={expense.category}
      account={expense.account}
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
            <th className="Expense-table-header">Account</th>
            <th className="Expense-table-header">Date</th>
          </tr>
        </thead>
        <tbody>{expenseRows}</tbody>
      </table>

      <div className="Buttons">
        <button className="Center-button">Add Entry</button>
        <button className="Center-button">Options</button>
      </div>

      <table className="Income-table">
        <thead>

        <tr>
            <th colSpan="4" className="Income-table-title">INCOMES</th>
          </tr>
          <tr>
            <th className="Income-table-header">Value</th>
            <th className="Income-table-header">Description</th>
            <th className="Income-table-header">Account</th>
            <th className="Income-table-header">Date</th>
          </tr>
        </thead>
        <tbody>{incomeRows}</tbody>
      </table>
    </div>
  );
};

export default Input;
