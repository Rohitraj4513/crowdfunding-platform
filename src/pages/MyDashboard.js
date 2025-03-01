import React from "react";
import styled from "styled-components";
import { FaRupeeSign, FaCheckCircle, FaClock } from "react-icons/fa";

const DashboardContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
  background: white;
  padding-top: 100px;
`;

const Header = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const StatsCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #007bff;
  color: white;
  font-size: 1.5rem;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background: #007bff;
  color: white;
  padding: 12px;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const Status = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
  color: ${({ status }) => (status === "Completed" ? "green" : "#e67e22")};
`;

const Dashboard = () => {
  const transactions = [
    { id: 1, donor: "Alice", amount: 500, date: "2025-02-27", status: "Completed" },
    { id: 2, donor: "Bob", amount: 300, date: "2025-02-25", status: "Pending" },
    { id: 3, donor: "Charlie", amount: 700, date: "2025-02-20", status: "Completed" },
  ];

  const totalFunds = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <DashboardContainer>
      <Header>📊 My Dashboard</Header>
      <StatsCard>
        <span>Total Funds Collected</span>
        <strong>
          <FaRupeeSign /> {totalFunds}
        </strong>
      </StatsCard>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Donor</Th>
            <Th>Amount</Th>
            <Th>Date</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <Td>{t.id}</Td>
              <Td>{t.donor}</Td>
              <Td>
                <FaRupeeSign /> {t.amount}
              </Td>
              <Td>{t.date}</Td>
              <Td>
                <Status status={t.status}>
                  {t.status === "Completed" ? <FaCheckCircle /> : <FaClock />} {t.status}
                </Status>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DashboardContainer>
  );
};

export default Dashboard;
