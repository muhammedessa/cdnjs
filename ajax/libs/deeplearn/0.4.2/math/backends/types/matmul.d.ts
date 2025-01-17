import { NamedArrayMap } from '../../../util';
import { Array2D } from '../../ndarray';
import { KernelInputConfig, KernelNode, TapeNodeInputGradientArrays } from '../tape_types';
export interface MatMulNode extends KernelNode {
    inputAndArgs: MatMulInputConfig;
    output: Array2D;
    gradient: (dy: Array2D, y: Array2D) => MatMulGradientInputArrays;
}
export interface MatMulInputConfig extends KernelInputConfig {
    inputs: MatMulInputArrays;
    args: {
        aOrientation: MatrixOrientation;
        bOrientation: MatrixOrientation;
    };
}
export interface MatMulInputArrays extends NamedArrayMap {
    a: Array2D;
    b: Array2D;
}
export interface MatMulGradientInputArrays extends TapeNodeInputGradientArrays {
    a: () => Array2D;
    b: () => Array2D;
}
export declare enum MatrixOrientation {
    REGULAR = 0,
    TRANSPOSED = 1,
}
