export const diagrams = [
  {
    id: 'travel-training-request',
    title: 'Travel and Training Request Process',
    chart: `
      graph TD

      %% Define a class for bolded boxes (both outline and text)
      classDef boldOutline stroke-width:3px,font-weight:bold;

      %% Travel Request Process Flow with Bolded Boxes for Decisions
      A[Travel request initiated] --> B[Yesenia receives request in Kissflow]
      B --> C["<b>Clarification needed?</b>"]:::boldOutline
      C -->|Yes| D[Request clarification]
      C -->|No| E[Prepare request form]
      D --> E
      E --> F[Verify calculations]
      F --> G[Verify dates and per diem]
      G --> H[Create request folder]
      H --> I[Pull supporting documents]
      I --> J[Log request in checklist]
      J --> K[Send reminders to Exec. Director]
      K --> L[Exec. Director reviews]
      L --> M["<b>Exec. Director approves?</b>"]:::boldOutline
      M -->|No| N[Notify requester of rejection]
      M -->|Yes| O[Submit to Management and Budget]
      O --> P[Place on court agenda]
      P --> Q[Commissioners Court reviews]
      Q --> R["<b>Commissioners approve?</b>"]:::boldOutline
      R -->|No| S[Request denied]
      R -->|Yes| T[Document on clerk's dashboard]
      T --> U[Pull approved document]
      U --> V[Upload to AppXtender]
      V --> W[Log in Court spreadsheet]
      W --> X[Close Kissflow request]
      X --> Y[Send acknowledgement]
      Y --> Z[Post on District dashboard]
      Z --> AA[Email employees about upload]
    `
  },
  {
    id: 'invoice-process',
    title: 'Invoice (professional services) Processing',
    chart: `
      graph TD
      A[Kathy receives invoice via Kissflow] --> B[Kathy opens DFA]
      B --> C[Kathy compares invoice details with vendor's form on Kissflow]
      C --> D[Kathy gets clarification from vendor if invoice details are unclear]
      D --> E[Kathy matches purchase order number within invoice for accuracy]
      E --> F[Kathy opens attachment to verify invoice matches]
      F --> G[Kathy ensures rates and details are correct]
      G --> H[Kathy scans invoice into AppXtender]
      H --> I[Kathy sends Kissflow form with attached invoice to project manager for approval]
      I --> J[Project/Contract manager approves invoice]
      J --> K[Department manager approves or denies]
      K --> L[Kathy receives approved invoice back through Kissflow]
      L --> M[Kathy enters the invoice amounts into DFA]
      M --> N[Kathy prints cover sheet PDF]
      N --> O[Kathy puts cover sheet in a virtual folder]
      O --> P[Kathy waits until court deadline to process payment]
      P --> Q[Kathy opens PeopleSoft]
      Q --> R[Kathy enters invoice amount in PeopleSoft]
      R --> S[Kathy attaches cover page to the invoice in AppXtender]
      S --> T[Kathy prints entire package into PDF]
      T --> U[Kathy sends scanned package to auditors for payment]
      U --> V[Auditors process payment]
      V --> W[Kathy goes back into Kissflow]
      W --> X[Kathy clicks 'Done' button in Kissflow]
      X --> Y[Kissflow sends email to vendor]
    `
  },
  {
    id: 'invoice-construction',
    title: 'Pay Application Invoice Construction',
    chart: `
      graph TD
      A[Kathy receives email with pay application invoice] --> B[Kathy reviews amount, PO number, application number, and signatures on invoice]
      B --> C{Is everything correct?}
      C -->|No| D[Kathy returns to sender with notes on what needs to be fixed]
      C -->|Yes| E[Kathy saves PDF copy of pay application invoice to desktop]
      E --> F[Kathy opens PeopleSoft]
      F --> G[Kathy enters PO number in PeopleSoft]
      G --> H[Kathy reviews lines that appear with different amounts and codings]
      H --> I[Kathy chooses correct coding]
      I --> J[Kathy enters amount of invoice against chosen lines]
      J --> K[Kathy saves entry in PeopleSoft]
      K --> L[Kathy gets receipt number from PeopleSoft]
      L --> M[Kathy writes receipt number on cover page of pay application invoice]
      M --> N[Kathy sends package to auditors downtown]
      N --> O[Kathy opens UNIFIER]
      O --> P[Kathy pulls up PO in UNIFIER]
      P --> Q[Kathy enters amount that was paid in UNIFIER]
      Q --> R[Kathy enters commissioner's court date in UNIFIER]
      R --> S[Kathy closes out PO in UNIFIER]
    `
  },
  {
    id: 'rca-court',
    title: 'RCA - For Court Actions (in UNIFIER)',
    chart: `
      graph TD
      %% Define a class for bolded boxes with no background color
      classDef boldOutline stroke-width:3px,font-weight:bold,fill:#ffffff,stroke:#000000;
      
      %% Define a class for the edges with no grey highlight
      classDef noHighlight stroke:#000000,stroke-width:2px;

      %% Travel Request Process Flow
      A[Yesenia receives RCA in DocuSign]:::boldOutline --> B[Yesenia reviews RCA for completeness and accuracy]:::boldOutline
      B --> C["<b>Is RCA complete?</b>"]:::boldOutline
      C -->|No| D[Yesenia requests additional information]:::noHighlight
      D --> B:::noHighlight
      C -->|Yes| E[Yesenia labels folder in OneDrive]:::noHighlight
      E --> F[Yesenia saves PDF and DocuSign request in OneDrive folder]:::boldOutline
      F --> G[Yesenia transfers information from draft RCA to formal RCA in OneDrive]:::boldOutline
      G --> H[Executive director reviews and initials folder in OneDrive]:::boldOutline
      H --> I[Yesenia receives notification item is ready for submission]:::boldOutline
      I --> J[Yesenia submits RCA to Commissioners Court via LegeStar]:::boldOutline
      J --> K[Yesenia uploads RCA and supporting documentation in LegeStar]:::boldOutline
      K --> L[Yesenia waits for RCA to be placed on agenda]:::boldOutline
      L --> M[County clerk posts document on website after approval]:::boldOutline
      M --> N["<b>Is RCA approved?</b>"]:::boldOutline
      N -->|No| O[Yesenia logs processed RCA with denied stamp]:::noHighlight
      N -->|Yes| P[Yesenia pulls approved document from county clerk's website]:::noHighlight
      P --> Q[Yesenia saves document in 'approved agenda items' folder]:::boldOutline
      Q --> R[Yesenia closes request in DocuSign by attaching approved RCA]:::boldOutline
      R --> S[Yesenia uploads approved RCA into AppExtender]:::boldOutline
      S --> T[Yesenia logs item in commissioner's court spreadsheet tracker]:::boldOutline
      T --> U[Yesenia uploads approved RCA to District Dashboard]:::boldOutline
    `
  },
  {
    id: 'rca-email',
    title: 'RCA - Via Email',
    chart: `
      graph LR
      
      %% Define a class for bolded boxes (both outline and text)
      classDef boldOutline stroke-width:3px,font-weight:bold;

      %% RCA Process Flow with Bolded Boxes for Decisions
      A[Yesenia receives RCA via email] --> B[Yesenia notes RCA in Excel spreadsheet checklist]
      B --> C[Yesenia creates folder in OneDrive and labels it]
      C --> D[Yesenia adds supporting documents to folder]
      D --> E["<b>Are documents complete?</b>"]:::boldOutline
      E -->|No| F[Yesenia requests additional information]
      F --> D
      E -->|Yes| G[Yesenia starts draft RCA]
      G --> H[Yesenia determines who will finalize RCA]
      H --> I[Final person completes and finalizes RCA]
      I --> J[Yesenia ensures backup is in folder]
      J --> K[Executive director reviews and initials folder in OneDrive]
      K --> L[Yesenia submits RCA to Commissioners Court via LegeStar]
      L --> M[Yesenia uploads RCA and supporting documentation in LegeStar]
      M --> N[Yesenia waits for RCA to be placed on agenda]
      N --> O[County clerk posts document on website after approval]
      O --> P["<b>Is RCA approved?</b>"]:::boldOutline
      P -->|No| Q[Yesenia logs processed RCA with denied stamp]
      P -->|Yes| R[Yesenia pulls approved document from county clerk's website]
      R --> S[Yesenia saves document in 'approved agenda items' folder]
      S --> T[Yesenia uploads approved RCA into AppExtender]
      T --> U[Yesenia logs item in commissioner's court spreadsheet tracker]
      U --> V[Yesenia uploads all approved documents into district dashboard]
    `
  },
  {
    id: 'rca-kissflow',
    title: 'RCA - Kissflow',
    chart: `
      graph TD
      
      %% Define a class for bolded circles (both outline and text)
      classDef boldCircle stroke-width:3px,font-weight:bold,shape:circle;

      %% RCA Process Flow with Circular Decision Points and Thick Arrows
      A[Travel request initiated] ==> B[Yesenia receives request in Kissflow]
      B ==> C(["<b>Clarification needed?</b>"]):::boldCircle
      
      subgraph ClarificationNeeded
        C ==> |Yes| D[Request clarification]
        D ==> E[Prepare request form]
      end
      
      subgraph PrepareRequest
        C ==> |No| E
        E ==> F[Verify calculations]
        F ==> G[Verify dates and per diem]
        G ==> H[Create request folder]
        H ==> I[Pull supporting documents]
        I ==> J[Log request in checklist]
        J ==> K[Send reminders to Exec. Director]
        K ==> L[Exec. Director reviews]
      end

      L ==> M(["<b>Exec. Director approves?</b>"]):::boldCircle

      subgraph ApprovalProcess
        M ==> |No| N[Notify requester of rejection]
        M ==> |Yes| O[Submit to Management and Budget]
        O ==> P[Place on court agenda]
        P ==> Q[Commissioners Court reviews]
      end

      Q ==> R(["<b>Commissioners approve?</b>"]):::boldCircle
      
      subgraph FinalSteps
        R ==> |No| S[Request denied]
        R ==> |Yes| T[Document on clerk's dashboard]
        T ==> U[Pull approved document]
        U ==> V[Upload to AppXtender]
        V ==> W[Log in Court spreadsheet]
        W ==> X[Close Kissflow request]
        X ==> Y[Send acknowledgement]
        Y ==> Z[Post on District dashboard]
        Z ==> AA[Email employees about upload]
      end
    `
  },
];
