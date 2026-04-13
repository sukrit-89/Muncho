export type ClassValue = string | number | null | undefined | false | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const walk = (value: ClassValue): void => {
    if (!value) return;

    if (Array.isArray(value)) {
      for (const item of value) walk(item);
      return;
    }

    classes.push(String(value));
  };

  for (const input of inputs) walk(input);

  return classes.join(' ');
}
