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

interface BaseAccountInterface extends ethers.utils.Interface {
  functions: {
    "entryPoint()": FunctionFragment;
    "getNonce()": FunctionFragment;
    "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [
      {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      BytesLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;

  events: {};
}

export class BaseAccount extends BaseContract {
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

  interface: BaseAccountInterface;

  functions: {
    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  entryPoint(overrides?: CallOverrides): Promise<string>;

  getNonce(overrides?: CallOverrides): Promise<BigNumber>;

  validateUserOp(
    userOp: {
      sender: string;
      nonce: BigNumberish;
      initCode: BytesLike;
      callData: BytesLike;
      callGasLimit: BigNumberish;
      verificationGasLimit: BigNumberish;
      preVerificationGas: BigNumberish;
      maxFeePerGas: BigNumberish;
      maxPriorityFeePerGas: BigNumberish;
      paymasterAndData: BytesLike;
      signature: BytesLike;
    },
    userOpHash: BytesLike,
    missingAccountFunds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    entryPoint(overrides?: CallOverrides): Promise<string>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}