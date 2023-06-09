/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ModuleManagerInterface extends ethers.utils.Interface {
  functions: {
    "disableModule(address,address)": FunctionFragment;
    "enableModule(address)": FunctionFragment;
    "execTransactionFromModule(address,uint256,bytes,uint8)": FunctionFragment;
    "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": FunctionFragment;
    "getModulesPaginated(address,uint256)": FunctionFragment;
    "isModuleEnabled(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "disableModule",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "enableModule",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "execTransactionFromModule",
    values: [string, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "execTransactionFromModuleReturnData",
    values: [string, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getModulesPaginated",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isModuleEnabled",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "disableModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "execTransactionFromModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "execTransactionFromModuleReturnData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getModulesPaginated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isModuleEnabled",
    data: BytesLike
  ): Result;

  events: {
    "DisabledModule(address)": EventFragment;
    "EnabledModule(address)": EventFragment;
    "ExecutionFailure(address,uint256,bytes,uint8,uint256)": EventFragment;
    "ExecutionFromModuleFailure(address)": EventFragment;
    "ExecutionFromModuleSuccess(address)": EventFragment;
    "ExecutionSuccess(address,uint256,bytes,uint8,uint256)": EventFragment;
    "ModuleTransaction(address,address,uint256,bytes,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DisabledModule"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EnabledModule"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionFailure"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionFromModuleFailure"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionFromModuleSuccess"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionSuccess"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModuleTransaction"): EventFragment;
}

export type DisabledModuleEvent = TypedEvent<[string] & { module: string }>;

export type EnabledModuleEvent = TypedEvent<[string] & { module: string }>;

export type ExecutionFailureEvent = TypedEvent<
  [string, BigNumber, string, number, BigNumber] & {
    to: string;
    value: BigNumber;
    data: string;
    operation: number;
    txGas: BigNumber;
  }
>;

export type ExecutionFromModuleFailureEvent = TypedEvent<
  [string] & { module: string }
>;

export type ExecutionFromModuleSuccessEvent = TypedEvent<
  [string] & { module: string }
>;

export type ExecutionSuccessEvent = TypedEvent<
  [string, BigNumber, string, number, BigNumber] & {
    to: string;
    value: BigNumber;
    data: string;
    operation: number;
    txGas: BigNumber;
  }
>;

export type ModuleTransactionEvent = TypedEvent<
  [string, string, BigNumber, string, number] & {
    module: string;
    to: string;
    value: BigNumber;
    data: string;
    operation: number;
  }
>;

export class ModuleManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ModuleManagerInterface;

  functions: {
    disableModule(
      prevModule: string,
      module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableModule(
      module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execTransactionFromModule(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execTransactionFromModuleReturnData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getModulesPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], string] & { array: string[]; next: string }>;

    isModuleEnabled(
      module: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  disableModule(
    prevModule: string,
    module: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableModule(
    module: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execTransactionFromModule(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execTransactionFromModuleReturnData(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getModulesPaginated(
    start: string,
    pageSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string[], string] & { array: string[]; next: string }>;

  isModuleEnabled(module: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    disableModule(
      prevModule: string,
      module: string,
      overrides?: CallOverrides
    ): Promise<void>;

    enableModule(module: string, overrides?: CallOverrides): Promise<void>;

    execTransactionFromModule(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    execTransactionFromModuleReturnData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { success: boolean; returnData: string }>;

    getModulesPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], string] & { array: string[]; next: string }>;

    isModuleEnabled(
      module: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "DisabledModule(address)"(
      module?: null
    ): TypedEventFilter<[string], { module: string }>;

    DisabledModule(
      module?: null
    ): TypedEventFilter<[string], { module: string }>;

    "EnabledModule(address)"(
      module?: null
    ): TypedEventFilter<[string], { module: string }>;

    EnabledModule(
      module?: null
    ): TypedEventFilter<[string], { module: string }>;

    "ExecutionFailure(address,uint256,bytes,uint8,uint256)"(
      to?: string | null,
      value?: BigNumberish | null,
      data?: BytesLike | null,
      operation?: null,
      txGas?: null
    ): TypedEventFilter<
      [string, BigNumber, string, number, BigNumber],
      {
        to: string;
        value: BigNumber;
        data: string;
        operation: number;
        txGas: BigNumber;
      }
    >;

    ExecutionFailure(
      to?: string | null,
      value?: BigNumberish | null,
      data?: BytesLike | null,
      operation?: null,
      txGas?: null
    ): TypedEventFilter<
      [string, BigNumber, string, number, BigNumber],
      {
        to: string;
        value: BigNumber;
        data: string;
        operation: number;
        txGas: BigNumber;
      }
    >;

    "ExecutionFromModuleFailure(address)"(
      module?: string | null
    ): TypedEventFilter<[string], { module: string }>;

    ExecutionFromModuleFailure(
      module?: string | null
    ): TypedEventFilter<[string], { module: string }>;

    "ExecutionFromModuleSuccess(address)"(
      module?: string | null
    ): TypedEventFilter<[string], { module: string }>;

    ExecutionFromModuleSuccess(
      module?: string | null
    ): TypedEventFilter<[string], { module: string }>;

    "ExecutionSuccess(address,uint256,bytes,uint8,uint256)"(
      to?: string | null,
      value?: BigNumberish | null,
      data?: BytesLike | null,
      operation?: null,
      txGas?: null
    ): TypedEventFilter<
      [string, BigNumber, string, number, BigNumber],
      {
        to: string;
        value: BigNumber;
        data: string;
        operation: number;
        txGas: BigNumber;
      }
    >;

    ExecutionSuccess(
      to?: string | null,
      value?: BigNumberish | null,
      data?: BytesLike | null,
      operation?: null,
      txGas?: null
    ): TypedEventFilter<
      [string, BigNumber, string, number, BigNumber],
      {
        to: string;
        value: BigNumber;
        data: string;
        operation: number;
        txGas: BigNumber;
      }
    >;

    "ModuleTransaction(address,address,uint256,bytes,uint8)"(
      module?: null,
      to?: null,
      value?: null,
      data?: null,
      operation?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, number],
      {
        module: string;
        to: string;
        value: BigNumber;
        data: string;
        operation: number;
      }
    >;

    ModuleTransaction(
      module?: null,
      to?: null,
      value?: null,
      data?: null,
      operation?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, number],
      {
        module: string;
        to: string;
        value: BigNumber;
        data: string;
        operation: number;
      }
    >;
  };

  estimateGas: {
    disableModule(
      prevModule: string,
      module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableModule(
      module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execTransactionFromModule(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execTransactionFromModuleReturnData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getModulesPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isModuleEnabled(
      module: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    disableModule(
      prevModule: string,
      module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableModule(
      module: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execTransactionFromModule(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execTransactionFromModuleReturnData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getModulesPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isModuleEnabled(
      module: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
