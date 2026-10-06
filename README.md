# EduStow — Enterprise School Management SaaS Cloud

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38BDF8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/System-Operational_99.98%25-10B981.svg)]()

EduStow is a unified cloud-native Educational ERP and School Management SaaS platform designed to power modern private institutions, Cambridge academies, and multi-campus school chains.

---

## 🌟 Ecosystem Architecture

EduStow merges the public marketing engine, school registration onboarding wizard, Flutterwave & Stripe billing system, school administration dashboard, and platform owner super-admin panel into **one connected experience**.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        EduStow SaaS Ecosystem                          │
├───────────────────┬───────────────────┬────────────────────────────────┤
│  Marketing Cloud  │  Onboarding Cloud │      Tenant Operations         │
│  - Hero SaaS UI   │  - 4-Step Wizard  │  - Overview Dashboard          │
│  - 24 ERP Modules │  - Plan Selector  │  - Subscription & Bursary      │
│  - Pricing Matrix │  - Capacity Scale │  - Multi-Campus Federation     │
│  - Demo Scheduler │  - Flutterwave Pay│  - Staff RBAC Governance       │
│  - STEM Tech Club │  - Instant Access │  - Official PDF Invoices       │
├───────────────────┴───────────────────┴────────────────────────────────┤
│                    Super Admin Platform Oversight                      │
│      - 180+ Partner Schools Directory • MRR & ARR Growth Ticker       │
│      - Tenant Verification & Suspensions • Real-Time Cloud Health     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Key Modules & Capabilities

1. **Public Marketing Website** (`/`)
   - High-converting hero with live interactive preview tabs (Bursary, Attendance, Reports)
   - Dynamic Student Population cost calculator with monthly & annual 20% discount toggle
   - Interactive 1-on-1 executive demo booking scheduler
   - EduStow STEM Tech Club Academy (`/tech-club`)

2. **School Registration & Onboarding Flow** (`/register`)
   - **Step 1**: Institution Identity, curriculum standard, state & logo setup
   - **Step 2**: Student volume slider, Starter / Professional / Enterprise plan selection, Add-ons (Biometric Turnstiles, WhatsApp Parent Gateway, Tech Club)
   - **Step 3**: Administrator account credentials, designation & 2FA security toggle
   - **Step 4**: Flutterwave & card checkout simulator with instant verification, confetti celebration, and 1-click launch into the School Dashboard

3. **Multi-Role Authentication** (`/login`)
   - One-click demo roles for immediate evaluation:
     - **School Admin**: Full institutional controls
     - **Staff / Bursar**: Finance & fee collection focus
     - **Super Admin**: Platform-wide owner oversight
   - Two-Factor Authentication (2FA) verification simulation

4. **SaaS Admin Dashboard** (`/dashboard`)
   - **Overview**: Real-time attendance rate, active subscription countdown, seat allocation bar, financial collection progress
   - **Subscription & Billing**: Plan upgrades/downgrades, Flutterwave saved payment methods, downloadable PDF tax receipts with verified stamps
   - **School Profile**: School crest upload, accreditation, active terms & currency toggles
   - **Branch Management**: Multi-campus coordinator assignments, student allocations & status
   - **User Administration**: Staff role-based access control (RBAC), invitations & fine-grained permissions
   - **Notifications Center**: Automated billing alerts, parent broadcast logs, and system warnings

5. **EduStow Super Admin Panel** (`/superadmin`)
   - Platform MRR and ARR growth monitor
   - Global school directory with 1-click Approval, Suspension, and Tenant Impersonation / Audit mode

---

## 💻 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom glassmorphism, enterprise gradients, and glow effects
- **Icons**: Lucide React
- **Animations & Delight**: Canvas-Confetti, smooth transitions
- **Architecture**: Modular layout hierarchy (`WebsiteLayout`, `DashboardLayout`), centralized reactive context (`AppContext`)

---

## 🛠️ Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Production build
npm run build
```

---

© 2026 EduStow Technologies Inc. All rights reserved.
