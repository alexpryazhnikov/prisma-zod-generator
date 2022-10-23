import { DMMF as PrismaDMMF } from '@prisma/client/runtime';
import { z } from 'zod';
export declare type TransformerParams = {
    enumTypes?: PrismaDMMF.SchemaEnum[];
    fields?: PrismaDMMF.SchemaArg[];
    name?: string;
    modelOperations?: PrismaDMMF.ModelMapping[];
    isDefaultPrismaClientOutput?: boolean;
    prismaClientOutputPath?: string;
};
export declare type ZodObjectProperties<Input> = Required<{
    [K in keyof Input]: z.ZodType<Input[K], any, Input[K]>;
}>;
