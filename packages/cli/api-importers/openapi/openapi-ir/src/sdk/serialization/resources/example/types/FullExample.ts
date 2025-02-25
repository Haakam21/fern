/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { PrimitiveExample } from "./PrimitiveExample";
import { LiteralExample } from "./LiteralExample";

export const FullExample: core.serialization.Schema<serializers.FullExample.Raw, FernOpenapiIr.FullExample> =
    core.serialization
        .union("type", {
            primitive: core.serialization.object({
                value: PrimitiveExample,
            }),
            object: core.serialization.lazyObject(() => serializers.FullObjectExample),
            array: core.serialization.object({
                value: core.serialization.list(core.serialization.lazy(() => serializers.FullExample)),
            }),
            map: core.serialization.object({
                value: core.serialization.list(core.serialization.lazyObject(() => serializers.KeyValuePair)),
            }),
            enum: core.serialization.object({
                value: core.serialization.string(),
            }),
            literal: core.serialization.object({
                value: LiteralExample,
            }),
            oneOf: core.serialization.object({
                value: core.serialization.lazy(() => serializers.FullOneOfExample),
            }),
            unknown: core.serialization.object({
                value: core.serialization.lazy(() => serializers.FullExample),
            }),
        })
        .transform<FernOpenapiIr.FullExample>({
            transform: (value) => {
                switch (value.type) {
                    case "primitive":
                        return FernOpenapiIr.FullExample.primitive(value.value);
                    case "object":
                        return FernOpenapiIr.FullExample.object(value);
                    case "array":
                        return FernOpenapiIr.FullExample.array(value.value);
                    case "map":
                        return FernOpenapiIr.FullExample.map(value.value);
                    case "enum":
                        return FernOpenapiIr.FullExample.enum(value.value);
                    case "literal":
                        return FernOpenapiIr.FullExample.literal(value.value);
                    case "oneOf":
                        return FernOpenapiIr.FullExample.oneOf(value.value);
                    case "unknown":
                        return FernOpenapiIr.FullExample.unknown(value.value);
                    default:
                        return value as FernOpenapiIr.FullExample;
                }
            },
            untransform: ({ _visit, ...value }) => value as any,
        });

export declare namespace FullExample {
    export type Raw =
        | FullExample.Primitive
        | FullExample.Object
        | FullExample.Array
        | FullExample.Map
        | FullExample.Enum
        | FullExample.Literal
        | FullExample.OneOf
        | FullExample.Unknown;

    export interface Primitive {
        type: "primitive";
        value: PrimitiveExample.Raw;
    }

    export interface Object extends serializers.FullObjectExample.Raw {
        type: "object";
    }

    export interface Array {
        type: "array";
        value: serializers.FullExample.Raw[];
    }

    export interface Map {
        type: "map";
        value: serializers.KeyValuePair.Raw[];
    }

    export interface Enum {
        type: "enum";
        value: string;
    }

    export interface Literal {
        type: "literal";
        value: LiteralExample.Raw;
    }

    export interface OneOf {
        type: "oneOf";
        value: serializers.FullOneOfExample.Raw;
    }

    export interface Unknown {
        type: "unknown";
        value: serializers.FullExample.Raw;
    }
}
