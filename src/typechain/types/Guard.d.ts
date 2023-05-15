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

interface GuardInterface extends ethers.utils.Interface {
  functions: {
    "checkAfterExecution(bytes32,bool)": FunctionFragment;
    "checkTransaction((address,uint8,uint256,bytes,uint256),(uint256,uint256,uint256,address,address),bytes,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkAfterExecution",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTransaction",
    values: [
      {
        to: string;
        operation: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
        targetTxGas: BigNumberish;
      },
      {
        baseGas: BigNumberish;
        gasPrice: BigNumberish;
        tokenGasPriceFactor: BigNumberish;
        gasToken: string;
        refundReceiver: string;
      },
      BytesLike,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkAfterExecution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export class Guard extends BaseContract {
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

  interface: GuardInterface;

  functions: {
    checkAfterExecution(
      txHash: BytesLike,
      success: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkTransaction(
      _tx: {
        to: string;
        operation: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
        targetTxGas: BigNumberish;
      },
      refundInfo: {
        baseGas: BigNumberish;
        gasPrice: BigNumberish;
        tokenGasPriceFactor: BigNumberish;
        gasToken: string;
        refundReceiver: string;
      },
      signatures: BytesLike,
      msgSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  checkAfterExecution(
    txHash: BytesLike,
    success: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkTransaction(
    _tx: {
      to: string;
      operation: BigNumberish;
      value: BigNumberish;
      data: BytesLike;
      targetTxGas: BigNumberish;
    },
    refundInfo: {
      baseGas: BigNumberish;
      gasPrice: BigNumberish;
      tokenGasPriceFactor: BigNumberish;
      gasToken: string;
      refundReceiver: string;
    },
    signatures: BytesLike,
    msgSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    checkAfterExecution(
      txHash: BytesLike,
      success: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    checkTransaction(
      _tx: {
        to: string;
        operation: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
        targetTxGas: BigNumberish;
      },
      refundInfo: {
        baseGas: BigNumberish;
        gasPrice: BigNumberish;
        tokenGasPriceFactor: BigNumberish;
        gasToken: string;
        refundReceiver: string;
      },
      signatures: BytesLike,
      msgSender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    checkAfterExecution(
      txHash: BytesLike,
      success: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkTransaction(
      _tx: {
        to: string;
        operation: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
        targetTxGas: BigNumberish;
      },
      refundInfo: {
        baseGas: BigNumberish;
        gasPrice: BigNumberish;
        tokenGasPriceFactor: BigNumberish;
        gasToken: string;
        refundReceiver: string;
      },
      signatures: BytesLike,
      msgSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkAfterExecution(
      txHash: BytesLike,
      success: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkTransaction(
      _tx: {
        to: string;
        operation: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
        targetTxGas: BigNumberish;
      },
      refundInfo: {
        baseGas: BigNumberish;
        gasPrice: BigNumberish;
        tokenGasPriceFactor: BigNumberish;
        gasToken: string;
        refundReceiver: string;
      },
      signatures: BytesLike,
      msgSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
