#![no_std]

use soroban_sdk::{contractimpl, symbol_short, Address, Env, Symbol};

pub struct Scholarship;

#[contractimpl]
impl Scholarship {
    pub fn approve_scholarship(env: Env, recipient: Address, amount: i128) {
        let token_contract_id = env
            .storage()
            .instance()
            .get::<Symbol, Address>(&symbol_short!("token"))
            .expect("token not set");

        env.invoke_contract::<()>(&token_contract_id, &symbol_short!("transfer"), (env.current_contract_address(), recipient, amount));
    }
    pub fn set_token(env: Env, token: Address) {
        env.storage().instance().set(&symbol_short!("token"), &token);
    }
}
