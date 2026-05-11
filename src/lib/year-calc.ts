export interface YearCalculationResult {
    years: number;
    months: number;
    days: number;
    totalDays: number;
    ageText: string;
}

function normalizeDate(value: string | Date): Date {
    const date = value instanceof Date ? new Date(value.getTime()) : new Date(value);

    if (Number.isNaN(date.getTime())) {
        throw new Error("Invalid birth date/time.");
    }

    return date;
}

function daysInMonth(year: number, monthIndex: number): number {
    return new Date(year, monthIndex + 1, 0).getDate();
}

export function calculateYearWithDays(
    birthTime: string | Date,
    asOf: string | Date = new Date(),
): YearCalculationResult {
    const birth = normalizeDate(birthTime);
    const current = normalizeDate(asOf);

    if (birth.getTime() > current.getTime()) {
        throw new Error("Birth date/time cannot be in the future.");
    }

    let years = current.getFullYear() - birth.getFullYear();
    let months = current.getMonth() - birth.getMonth();
    let days = current.getDate() - birth.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = (current.getMonth() - 1 + 12) % 12;
        const prevMonthYear = prevMonth === 11 ? current.getFullYear() - 1 : current.getFullYear();
        days += daysInMonth(prevMonthYear, prevMonth);
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const totalDays = Math.floor((current.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));

    return {
        years,
        months,
        days,
        totalDays,
        ageText: `${years} year${years !== 1 ? "s" : ""}, ${days} day${days !== 1 ? "s" : ""}`,
    };
}
