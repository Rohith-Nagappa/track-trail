import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Chart from "../Chart/Chart";
import { rupee } from "../../utils/icons";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";

const Dashboard = () =>{
    const {totalExpenses,totalIncome,totalBalance,getIncomes,getExpenses,incomes,expenses}= useGlobalContext()
    

    useEffect(() => {
      getIncomes()
      getExpenses()
      
    },[]);

    return(
           <DashboardStyled>
            <InnerLayout>
            <h1>All Transactions</h1>
            <div className="stats-con">
              <div className="chart-con">
                <Chart/>
                <div className="amount-con">
                    <div className="income">
                        <h2>Total Income</h2>
                        <p>{rupee} {totalIncome()}</p>
                    </div>
                    <div className="expense">
                        <h2>Total Expense</h2>
                        <p>{rupee} {totalExpenses()}</p>
                    </div>
                    <div className="balance">
                        <h2>Total Balance</h2>
                        <p>{rupee}{totalBalance()}</p>
                    </div>
                </div>
              </div>
              <div className="history-con">
                   <History/>
                   <h2 className="income-title">Min <span>Income</span> Max</h2>
                   <div className="income-item">
                       <p>
                        {Math.min(...incomes.map((inc) => inc.amount))}
                       </p>
                   </div>
              </div>
            </div>
            </InnerLayout>
            </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`;

export default Dashboard;