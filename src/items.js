// export const columns = [
//   {
//     name: "businessName",
//     required: true,
//     label: "Business Name",
//     align: "left",
//     field: "businessName",
//     sortable: true,
//   },
//   {
//     name: "businessId",
//     required: true,
//     label: "Business ID",
//     align: "left",
//     field: "businessId",
//     sortable: true,
//   },

//   {
//     name: "VerificationStatus",
//     required: true,
//     label: "Verification Status",
//     align: "left",
//     field: "VerificationStatus",
//     sortable: true,
//   },
//   {
//     name: "businessType",
//     required: true,
//     label: "Business Type",
//     align: "left",
//     field: "businessType",
//     sortable: true,
//   },
//   {
//     name: "Datecreated",
//     required: true,
//     label: "Date Created",
//     align: "left",
//     field: "DateCreated",
//     sortable: true,
//   },
//   // Add more columns as needed
// ];

export const items = [
  {
    id: 1,
    businessName: "CraftElevate",
    businessId: "#10004200211",
    businessType: "Individual Business",
    verificationStatus: "Approved",
    dateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-approved",
  },
  {
    id: 2,
    businessName: "InnovateEmpower",
    businessId: "#10004200211",
    verificationStatus: "Approved",
    businessType: "Individual Business",
    dateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-approved",
  },
  {
    id: 3,
    businessName: "ImagineBuild",
    businessId: "#10004200211",
    businessType: "Partnership",
    verificationStatus: "Pending Approval",
    dateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-pending",
  },
  {
    id: 4,
    businessName: "InnovateExpress",
    businessId: "#10004200211",
    businessType: "Registered Company",
    verificationStatus: "Approved",
    dateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-approved",
  },
  {
    id: 5,
    businessName: "InspireInvent",
    businessId: "#10004200211",
    businessType: "Individual Business",
    verificationStatus: "Pending Approval",
    dateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-pending",
  },
  {
    id: 6,
    businessName: "InspiredRevolution",
    businessId: "#10004200211",
    businessType: "Registered Company",
    verificationStatus: "Queried",
    dateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-quaried",
  },
  {
    id: 7,
    businessName: "DesignUnleashed",
    businessId: "#10004200211",
    businessType: "Individual Business",
    VerificationStatus: "Pending Approval",
    dateCreated: "Aug 12  2020 9.37 AM",
    statusClass: "status-pending",
  },
];



export const columns = [
  {
    name: 'businessName',
    required: true,
    label: 'Business Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'businessId', align: 'center', label: 'Business ID', field: 'businessId', sortable: true },
  { name: 'verificationStatus',align:"center", label: 'Verification Status', field: 'verificationStatus', sortable: true },
  { name: 'businessType',align:"center", label: 'Business Type', field: 'businessType' },
  { name: 'dateCreated',align:"left", label: 'Date Created', field: 'dateCreated' },
]
