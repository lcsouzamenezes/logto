const quota_table = {
  quota: {
    title: 'Grundlagen',
    base_price: 'Grundpreis',
    mau_limit: 'MAU-Limit',
    included_tokens: 'Inkludierte Tokens',
  },
  application: {
    title: 'Anwendungen',
    total: 'Gesamtzahl der Anwendungen',
    m2m: 'Maschine-zu-Maschine',
  },
  resource: {
    title: 'API-Ressourcen',
    resource_count: 'Ressourcenanzahl',
    scopes_per_resource: 'Berechtigungen pro Ressource',
  },
  branding: {
    title: 'Benutzeroberfläche und Branding',
    custom_domain: 'Benutzerdefinierte Domain',
    custom_css: 'Benutzerdefiniertes CSS',
    app_logo_and_favicon: 'App-Logo und Favicon',
    dark_mode: 'Dunkler Modus',
    i18n: 'Internationalisierung',
  },
  user_authn: {
    title: 'Benutzerauthentifizierung',
    omni_sign_in: 'Omni-Anmeldung',
    password: 'Passwort',
    passwordless: 'Passwortlos - E-Mail und SMS',
    email_connector: 'E-Mail-Connector',
    sms_connector: 'SMS-Connector',
    social_connectors: 'Social-Connectors',
    standard_connectors: 'Standard-Connectors',
    built_in_email_connector: 'Integrierter E-Mail-Connector',
    mfa: 'MFA',
    sso: 'Unternehmens-SSO',
  },
  user_management: {
    title: 'Benutzerverwaltung',
    user_management: 'Benutzerverwaltung',
    roles: 'Rollen',
    machine_to_machine_roles: 'Maschine-zu-Maschine Rollen',
    scopes_per_role: 'Berechtigungen pro Rolle',
  },
  audit_logs: {
    title: 'Prüfprotokolle',
    retention: 'Aufbewahrungsdauer',
  },
  hooks: {
    title: 'Webhooks',
    hooks: 'Webhooks',
  },
  organizations: {
    title: 'Organisation',
    organizations: 'Organisationen',
    monthly_active_organization: 'Monatlich aktive Organisationen',
    allowed_users_per_org: 'Erlaubte Benutzer pro Organisation',
    invitation: 'Einladung',
    org_roles: 'Org Rollen',
    org_permissions: 'Org Berechtigungen',
    just_in_time_provisioning: 'Bedarfsgesteuerte Bereitstellung',
  },
  support: {
    title: 'Compliance und Support',
    community: 'Gemeinschaft',
    customer_ticket: 'Support-Ticket',
    premium: 'Premium',
    email_ticket_support: 'E-Mail-Ticket-Support',
    soc2_report: 'SOC2-Bericht',
    hipaa_or_baa_report: 'HIPAA/BAA-Bericht',
  },
  unlimited: 'Unbegrenzt',
  contact: 'Kontakt',
  monthly_price: '${{value, number}}/Monat',
  days_one: '{{count, number}} Tag',
  days_other: '{{count, number}} Tage',
  add_on: 'Zusatzleistung',
  tier: 'Stufe{{value, number}}: ',
  free_token_limit_tip: 'Kostenlos bis {{value}}M umlaufende Tokens.',
  paid_token_limit_tip:
    'Kostenlos bis {{value}}M umlaufende Tokens. Wir können Gebühren hinzufügen, wenn Sie über {{value}}M Tokens hinausgehen, sobald wir die Preise finalisieren.',
  paid_quota_limit_tip:
    'Wir können Gebühren für Funktionen hinzufügen, die Ihre Kontingentgrenze überschreiten, sobald wir die Preise finalisieren.',
  beta_feature_tip:
    'Während der Beta-Phase kostenfrei zu benutzen. Wir werden mit der finalen Festlegung der Zusatzkosten beginnen.',
  usage_based_beta_feature_tip:
    'Während der Beta-Phase kostenfrei zu benutzen. Wir werden mit der finalen Festlegung der organisationsbasierten nutzungsabhängigen Preise beginnen.',
  beta: 'Beta',
  add_on_beta: 'Add-on (Beta)',
  million: '{{value, number}} Millionen',
  mau_tip:
    'MAU (monatlich aktive Benutzer) bedeutet die Anzahl der eindeutigen Benutzer, die in einem Abrechnungsmonat mindestens einen Token mit Logto ausgetauscht haben.',
  tokens_tip:
    'Alle Arten von Tokens, die von Logto ausgegeben wurden, einschließlich Zugriffstoken, Aktualisierungstoken, usw.',
};

export default Object.freeze(quota_table);
