import styles from "./Ticket.module.scss"
import TicketTable from "./TicketTable";
const Tickets = () => {
  return (
    <div className={styles.container} >
      <div className={styles.container_widz + " " + styles.container_widz_1}>
        <h2 className={styles.widz_num}>1</h2>
        <p className="">Total Tickets</p>
      </div>
      <div className={styles.container_widz + " " + styles.container_widz_2}>
        <h2 className={styles.widz_num}>1</h2>
        <p className="">Open</p>
      </div>
      <div className={styles.container_widz + " " + styles.container_widz_3}>
        <h2 className={styles.widz_num}>1</h2>
        <p className="">Pending</p>
      </div>
      <div className={styles.container_widz + " " + styles.container_widz_4}>
        <h2 className={styles.widz_num}>1</h2>
        <p className="">Overdue</p>
      </div>
      <div className={styles.container_widz + " " + styles.container_widz_5}>
        <h2 className={styles.widz_num}>1</h2>
        <p className="">Assigned</p>
      </div>
      <div className={styles.container_ticketTable}> 
      <TicketTable />
      </div>
    </div>
  )
}

export default Tickets