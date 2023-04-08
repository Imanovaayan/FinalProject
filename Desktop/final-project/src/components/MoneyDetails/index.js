import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/482/482541.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" id="balanceAmount">
            {balanceAmount} AZN
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/584/584067.png"
          alt="income"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money" id="incomeAmount">
             {incomeAmount} AZN
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5501/5501384.png"
          alt="expenses"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money" testid="expensesAmount">
             {expensesAmount} AZN
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails