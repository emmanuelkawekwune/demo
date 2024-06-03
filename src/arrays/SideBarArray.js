import userImage from "../assests/icons/user.svg"
import companyImage from "../assests/icons/company.svg"
import teamImage from "../assests/icons/team.svg"
import paymentImage from "../assests/icons/payment.svg"
import phoneImage from "../assests/icons/phone.svg"
import emailImage from "../assests/icons/email.svg"
import securityImage from "../assests/icons/security.svg"
import supportImage from "../assests/icons/support.svg"

export const sideBarArray = [
    {
        name: "User Profile",
        icon: userImage,
        href: "/user"
    },
    {
        name: "Company Profile",
        icon: companyImage,
        href: "companyprofile"
    },
    {
        name: "Manage Team",
        icon: teamImage,
        href: "manageteam"
    },
    {
        name: " Payment & Billing",
        icon: paymentImage,
        href: "payment"
    },
    {
        name: " Phone Account",
        icon: phoneImage,
        href: "phoneaccount"
    },
    {
        name: "Email Account",
        icon: emailImage,
        href: "emailaccount"
    },
    {
        name: "Security Settings",
        icon: securityImage,
        href: "securitysettings"
    },
    {
        name: "Support",
        icon: supportImage,
        href: "support"
    },
]
