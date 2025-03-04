import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import babelrc from './.babelrc.json';

export function glconstants() {

	var constants = {
		POINTS: 0, ZERO: 0, NONE: 0,
		LINES: 1, ONE: 1,
		LINE_LOOP: 2,
		LINE_STRIP: 3,
		TRIANGLES: 4,
		TRIANGLE_STRIP: 5,
		TRIANGLE_FAN: 6,
		DEPTH_BUFFER_BIT: 256,
		LESS: 513,
		NEVER: 512,
		EQUAL: 514,
		LEQUAL: 515,
		GREATER: 516,
		NOTEQUAL: 517,
		GEQUAL: 518,
		ALWAYS: 519,
		SRC_COLOR: 768,
		ONE_MINUS_SRC_COLOR: 769,
		SRC_ALPHA: 770,
		ONE_MINUS_SRC_ALPHA: 771,
		DST_ALPHA: 772,
		ONE_MINUS_DST_ALPHA: 773,
		DST_COLOR: 774,
		ONE_MINUS_DST_COLOR: 775,
		SRC_ALPHA_SATURATE: 776,
		STENCIL_BUFFER_BIT: 1024,
		FRONT: 1028,
		BACK: 1029,
		FRONT_AND_BACK: 1032,
		CW: 2304,
		CCW: 2305,
		CULL_FACE: 2884,
		DEPTH_TEST: 2929,
		STENCIL_TEST: 2960,
		VIEWPORT: 2978,
		BLEND: 3042,
		SCISSOR_BOX: 3088,
		SCISSOR_TEST: 3089,
		UNPACK_ALIGNMENT: 3317,
		MAX_TEXTURE_SIZE: 3379,
		DEPTH24_STENCIL8: 35056,
		TEXTURE_2D: 3553,
		BYTE: 5120,
		UNSIGNED_BYTE: 5121,
		SHORT: 5122,
		UNSIGNED_INT: 5125,
		UNSIGNED_SHORT: 5123,
		INT: 5124,
		FLOAT: 5126,
		HALF_FLOAT: 5131,
		DEPTH_COMPONENT: 6402,
		RED: 6403,
		ALPHA: 6406,
		RGB: 6407,
		RGBA: 6408,
		LUMINANCE: 6409,
		LUMINANCE_ALPHA: 6410,
		KEEP: 7680,
		RED_INTEGER: 36244,
		RG: 33319,
		RG_INTEGER: 33320,
		RGB_INTEGER: 36248,
		RGBA_INTEGER: 36249,
		VERSION: 7938,
		NEAREST: 9728,
		LINEAR: 9729,
		NEAREST_MIPMAP_NEAREST: 9984,
		LINEAR_MIPMAP_NEAREST: 9985,
		NEAREST_MIPMAP_LINEAR: 9986,
		LINEAR_MIPMAP_LINEAR: 9987,
		TEXTURE_MAG_FILTER: 10240,
		TEXTURE_MIN_FILTER: 10241,
		TEXTURE_WRAP_S: 10242,
		TEXTURE_WRAP_T: 10243,
		TEXTURE_WRAP_R: 32882,
		REPEAT: 10497,
		COLOR_BUFFER_BIT: 16384,
		FUNC_ADD: 32774,
		MIN: 32775,
		MAX: 32776,
		FUNC_SUBTRACT: 32778,
		FUNC_REVERSE_SUBTRACT: 32779,
		UNSIGNED_SHORT_4_4_4_4: 32819,
		UNSIGNED_SHORT_5_5_5_1: 32820,
		POLYGON_OFFSET_FILL: 32823,
		RGB8: 32849,
		RGBA4: 32854,
		RGBA8: 32856,
		TEXTURE_3D: 32879,
		CLAMP_TO_EDGE: 33071,
		DEPTH_COMPONENT16: 33189,
		DEPTH_COMPONENT24: 33190,
		DEPTH_COMPONENT32F: 36012,
		DEPTH_STENCIL_ATTACHMENT: 33306,
		R8: 33321,
		R16F: 33325,
		R32F: 33326,
		UNSIGNED_SHORT_5_6_5: 33635,
		MIRRORED_REPEAT: 33648,
		TEXTURE0: 33984,
		DEPTH_STENCIL: 34041,
		UNSIGNED_INT_24_8: 34042,
		TEXTURE_CUBE_MAP: 34067,
		TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
		MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
		COMPRESSED_TEXTURE_FORMATS: 34467,
		RGBA32F: 34836,
		RGB32F: 34837,
		RGBA16F: 34842,
		RGB16F: 34843,
		MAX_VERTEX_ATTRIBS: 34921,
		MAX_TEXTURE_IMAGE_UNITS: 34930,
		ARRAY_BUFFER: 34962,
		ELEMENT_ARRAY_BUFFER: 34963,
		STATIC_DRAW: 35044,
		DYNAMIC_DRAW: 35048,
		VERTEX_SHADER: 35633,
		FRAGMENT_SHADER: 35632,
		MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
		MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
		FLOAT_MAT2: 35674,
		FLOAT_MAT3: 35675,
		FLOAT_MAT4: 35676,
		COMPILE_STATUS: 35713,
		LINK_STATUS: 35714,
		VALIDATE_STATUS: 35715,
		ACTIVE_UNIFORMS: 35718,
		ACTIVE_ATTRIBUTES: 35721,
		IMPLEMENTATION_COLOR_READ_TYPE: 35738,
		IMPLEMENTATION_COLOR_READ_FORMAT: 35739,
		TEXTURE_2D_ARRAY: 35866,
		COLOR_ATTACHMENT0: 36064,
		FRAMEBUFFER_COMPLETE: 36053,
		DEPTH_ATTACHMENT: 36096,
		FRAMEBUFFER: 36160,
		RENDERBUFFER: 36161,
		LOW_FLOAT: 36336,
		MEDIUM_FLOAT: 36337,
		HIGH_FLOAT: 36338,
		MAX_VERTEX_UNIFORM_VECTORS: 36347,
		MAX_VARYING_VECTORS: 36348,
		MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
		UNPACK_FLIP_Y_WEBGL: 37440,
		UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
		UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
		UNPACK_ROW_LENGTH: 3314,
		UNPACK_IMAGE_HEIGHT: 32878,
		UNPACK_SKIP_PIXELS: 3316,
		UNPACK_SKIP_ROWS: 3315,
		UNPACK_SKIP_IMAGES: 32877,
		MAX_SAMPLES: 36183,
		READ_FRAMEBUFFER: 36008,
		DRAW_FRAMEBUFFER: 36009,
		SAMPLE_ALPHA_TO_COVERAGE: 32926
	};

	return {

		transform( code ) {

			code = code.replace( /_?gl\.([A-Z0-9_]+)/g, function ( match, p1 ) {

				if ( p1 in constants ) return constants[ p1 ];
				console.log( '* Unhandled GL Constant:', p1 );
				return match;

			} );

			return {
				code: code,
				map: null
			};

		}

	};

}

function addons() {

	return {

		transform( code, id ) {

			if ( /\/examples\/jsm\//.test( id ) === false ) return;

			code = code.replace( 'build/three.module.js', 'src/Three.js' );

			return {
				code: code,
				map: null
			};

		}

	};

}

export function glsl() {

	return {

		transform( code, id ) {

			if ( /\.glsl.js$/.test( id ) === false ) return;

			code = code.replace( /\/\* glsl \*\/\`((.|\r|\n)*)\`/, function ( match, p1 ) {

				return JSON.stringify(
					p1
						.trim()
						.replace( /\r/g, '' )
						.replace( /[ \t]*\/\/.*\n/g, '' ) // remove //
						.replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ) // remove /* */
						.replace( /\n{2,}/g, '\n' ) // # \n+ to \n
				);

			} );

			return {
				code: code,
				map: null
			};

		}

	};

}

function babelCleanup() {

	const doubleSpaces = / {2}/g;

	return {

		transform( code ) {

			code = code.replace( doubleSpaces, '\t' );

			return {
				code: code,
				map: null
			};

		}

	};

}

function header() {

	return {

		renderChunk( code ) {

			return `/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
${ code }`;

		}

	};

}

// Transform #properties to _properties until they're supported in bundlers
function privateProperties() {

	return {

		transform( code, id ) {

			if ( /\.glsl.js$/.test( id ) === true ) return;

			// replace `#property =` with `_property =`
			code = code.replace( /#(\w+) =/g, ( match, p1 ) => `_${p1} =` );

			// replace `#property;` with `_property;`
			code = code.replace( /#(\w+);/g, ( match, p1 ) => `_${p1};` );

			// replace `this.#property` with `this._property`
			code = code.replace( /this\.#(\w+)/g, ( match, p1 ) => `this._${p1}` );

			return {
				code: code,
				map: null
			};

		}

	};

}

export default [
	{
		input: 'src/Three.js',
		plugins: [
			addons(),
			glconstants(),
			glsl(),
			privateProperties(),
			header()
		],
		output: [
			{
				format: 'esm',
				file: 'build/three.module.js'
			}
		]
	},
	{
		input: 'src/Three.js',
		plugins: [
			addons(),
			glsl(),
			babel( {
				babelHelpers: 'bundled',
				compact: false,
				babelrc: false,
				...babelrc
			} ),
			babelCleanup(),
			header()
		],
		output: [
			{
				format: 'umd',
				name: 'THREE',
				file: 'build/three.js',
				indent: '\t'
			}
		]
	},
	{
		input: 'src/Three.js',
		plugins: [
			addons(),
			glconstants(),
			glsl(),
			babel( {
				babelHelpers: 'bundled',
				babelrc: false,
				...babelrc
			} ),
			babelCleanup(),
			terser(),
			header()
		],
		output: [
			{
				format: 'umd',
				name: 'THREE',
				file: 'build/three.min.js'
			}
		]
	}
];
