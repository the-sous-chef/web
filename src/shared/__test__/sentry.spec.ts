import { beforeEach, describe, expect, test, vi } from 'vitest';
import { beforeSend } from 'src/shared/sentry';
import type { Event } from '@sentry/types';

vi.mock('logrocket', () => ({
    sessionURL: 'test',
}));

describe('sentry uilities', () => {
    describe('beforeSend', () => {
        let mockEvent: Event;
        const mockError = new Error("this is not the event you're looking for");

        beforeEach(() => {
            mockEvent = {
                message: mockError.message,
            };
        });

        test('it should not return the event when the level is debug', () => {
            mockEvent.level = 'debug';

            expect(beforeSend(mockEvent)).toBe(null);
        });
    });
});
