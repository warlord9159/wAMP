/*
 * wormp3macro.h
 *
 *  Created on: Aug 19, 2010
 *      Author: Katiebird
 */

#include "config.h"

#ifndef WORMP3MACRO_H_
#define WORMP3MACRO_H_

#include <assert.h>
#include <stdio.h>
#include "WormDebug.h"


// Graphics Macros
#define AssignProperVertsWithC(x, y, w, h, c) \
{	\
	(GLfloat)x, (GLfloat)y, (GLfloat) c, \
	(GLfloat)(x+w), (GLfloat)y, (GLfloat) c,	\
	(GLfloat)x, (GLfloat)(y+h), (GLfloat) c,	\
	(GLfloat)(x+w), (GLfloat)(y+h), (GLfloat) c	\
}

#define AssignProperVerts(x, y, w, h) \
{	\
	(GLfloat)x, (GLfloat)y,	\
	(GLfloat)(x+w), (GLfloat)y,	\
	(GLfloat)x, (GLfloat)(y+h),	\
	(GLfloat)(x+w), (GLfloat)(y+h),	\
}

#define AssignProperUVCoord(u1, v1, u2, v2) \
{	\
	u1, v2, \
	u2, v2, \
	u1, v1, \
	u2, v1  \
}

#define Distance(x, y) sqrt((x*x)+(y*y))

#define MAX(a,b) ((a) > (b) ? (a) : (b))

// A macro to generate the standard enum functions
#define DefineEnumIteratorsMacro(eEnumType) \
inline void operator++(eEnumType& eVal) \
{ \
    eVal = eEnumType(eVal+1); \
} \
\
inline void operator++(eEnumType& eVal, int)  \
{ \
    eVal = eEnumType(eVal+1); \
} \
\
inline void operator--(eEnumType& eVal) \
{ \
    eVal = eEnumType(eVal-1); \
} \
\
inline void operator--(eEnumType& eVal, int)  \
{ \
    eVal = eEnumType(eVal-1); \
}


// Since we are working with bytes we need to worry about if we are Big or small endian
//	so to keep the code easily portable, we do it automatically with tests.

//extern bool BigEndianSystem;  //you might want to extern this

//extern void InitEndian();

//extern short ShortSwap(short s);

#define BytesToShort(X, Y) (short)((Y<<8)|(X&0xff))

// This is a function to copy a string and make sure any " are
//	marked with an escape character
extern void ConvertQuoteStrcpy(char *dest, const char *scr);

// this is for run time checking, which we don't need here
//#define BytesToShort(X, Y) BigEndianSystem ?(short)((X<<8)|(Y&0xff)):(short)((Y<<8)|(X&0xff))

#endif /* WORMP3MACRO_H_ */
