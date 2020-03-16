export interface Products {
    accountInformation: AccountInformation;
    locked: boolean;
    id: string;
    typeAccount: string;
    openedDate?: string;
    closedDate?: string;
    dueDate?: string;
    status?: string;
    lastTransactionDate?: string;
    term?: Term;
    overDraftDays?: number;
    periodicityOfPayment?: PeriodicityOfPayment;
    productAccountBalances?: ProductAccountBalances;
    capacity?: number;
}
export interface AccountInformation {
    accountIdentifier: string;
    productType: string;
    currencyCode?: string;
    bank: string;
}
export interface Term {
    count: number;
    units: string;
}
export interface PeriodicityOfPayment {
    count: number;
    units: string;
}
export interface ProductAccountBalances {
    saldo_canje?: Amount;
    cupo_aprobado_remesas?: Amount;
    cupos_aprobado_sobregiro?: Amount;
    saldo_disponible?: Amount;
    cupo_disponible_sobregiro?: Amount;
    saldo_canje_48_horas?: Amount;
    saldo_canje_72_horas?: Amount;
    saldo_canje_24_horas?: Amount;
    saldo_ayer?: Amount;
    saldo_actual?: Amount;
    saldo_pendiente_pago?: Amount;
    tasa_nominal?: Amount;
    interes_pagado?: Amount;
    valor_constitucion?: Amount;
    intereses_causados?: Amount;
    retefuente?: Amount;
    pago_total_pesos?: Amount;
    cupo_disponible_avances_pesos?: Amount;
    saldo_mora_pesos?: Amount;
    cupo_disponible_compras_pesos?: Amount;
    valor_pago_minimo?: Amount;
    cupo_total?: Amount;
}
export interface Amount {
    amount: number;
    currencyCode?: string;
    rate?: number;
}
export interface CountTypeAccount {
    CERTIFIED_DEPOSIT_TERM: number;
    CURRENT_ACCOUNT: number;
    CREDIT: number;
    CREDIT_CARD: number;
}