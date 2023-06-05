export const columns = [
  {
    name: "businessName",
    required: true,
    label: "Business Name",
    align: "left",
    field: "businessName",
    sortable: true,
  },
  {
    name: "businessId",
    required: true,
    label: "Business ID",
    align: "left",
    field: "businessId",
    sortable: true,
  },

  {
    name: "VerificationStatus",
    required: true,
    label: "Verification Status",
    align: "left",
    field: "VerificationStatus",
    sortable: true,
    // scopedSlots: {
    //   custom: (props) => {
    //     // Apply custom styling based on the VerificationStatus value
    //     const itemStyle = {
    //       display: "inline-block",
    //       padding: "4px 8px",
    //       borderRadius: "4px",
    //       color: "#ffffff", // Text color for all statuses
    //       backgroundColor: "", // Background color based on the status
    //     };

    //     switch (props.row.VerificationStatus) {
    //       case "Approved":
    //         itemStyle.backgroundColor = "#4caf50"; // Green color for Approved status
    //         break;
    //       case "Pending Approval":
    //         itemStyle.backgroundColor = "#ff9800"; // Orange color for Pending Approval status
    //         break;
    //       case "Quaried":
    //         itemStyle.backgroundColor = "#f44336"; // Red color for Quaried status
    //         break;
    //       // Add more cases for other statuses as needed
    //       default:
    //         itemStyle.backgroundColor = "#bdbdbd"; // Default background color
    //     }

    //     // Return the styled content
    //     return `<div style="${Object.entries(itemStyle)
    //       .map(([key, value]) => `${key}:${value}`)
    //       .join(";")}">${props.row.VerificationStatus}</div>`;
    //   },
    // },
  },
  {
    name: "businessType",
    required: true,
    label: "Business Type",
    align: "left",
    field: "businessType",
    sortable: true,
  },
  {
    name: "Datecreated",
    required: true,
    label: "Date Created",
    align: "left",
    field: "DateCreated",
    sortable: true,
  },
  // Add more columns as needed
];

export const items = [
  {
    id: 1,
    businessName: "CraftElevate",
    businessId: "#10004200211",
    businessType: "Individual Business",
    VerificationStatus: "Approved",
    DateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-approved",
  },
  {
    id: 2,
    businessName: "InnovateEmpower",
    businessId: "#10004200211",
    VerificationStatus: "Approved",
    businessType: "Individual Business",
    DateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-approved",
  },
  {
    id: 3,
    businessName: "ImagineBuild",
    businessId: "#10004200211",
    businessType: "Partnership",
    VerificationStatus: "Pending Approval",
    DateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-pending",
  },
  {
    id: 4,
    businessName: "InnovateExpress",
    businessId: "#10004200211",
    businessType: "Registered Company",
    VerificationStatus: "Approved",
    DateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-approved",
  },
  {
    id: 5,
    businessName: "InspireInvent",
    businessId: "#10004200211",
    businessType: "Individual Business",
    VerificationStatus: "Pending Approval",
    DateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-pending",
  },
  {
    id: 6,
    businessName: "InspiredRevolution",
    businessId: "#10004200211",
    businessType: "Registered Company",
    VerificationStatus: "Queried",
    DateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-quaried",
  },
  {
    id: 7,
    businessName: "DesignUnleashed",
    businessId: "#10004200211",
    businessType: "Individual Business",
    VerificationStatus: "Pending Approval",
    DateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-pending",
  },
];
