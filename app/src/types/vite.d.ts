import React, { ReactNode } from 'react';

// تعريف RC: React Component
export type RC<P extends object = object> = React.FC<P>;

// تعريف RPO: React Provider Component
export type RPO<P extends object = object> = React.FC<P & { children?: ReactNode }>;

// تعريف RPL: React Layout Component
export type RPL<P extends object = object> = React.FC<P & { children?: ReactNode; title?: string }>;
